import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from urllib.parse import quote

import base64

# List of sbSeq values (decoded)
sbSeq_values_decoded = [str(num) for num in list(range(63, 2027))]

# Encode sbSeq values
sbSeq_values_encoded = [
    base64.b64encode(sbSeq.encode()).decode() for sbSeq in sbSeq_values_decoded
]

print("Encoded sbSeq values:", sbSeq_values_encoded)

# Base URL
base_url = "https://study.ssu.ac.kr/community/uni_view.do?searchType=&siteCd=MDE%3D&sectionCd=&noticeCd=&contentYN=&searchVal=&boardCd=MDY%3D&gbCd=&targetCd=&cateSeq=&sbSeq={}&listUrl=L2NvbW11bml0eS91bmlfbGlzdC5kbw%3D%3D&topYn=Tg%3D%3D"

# Initialize Selenium webdriver
driver = (
    webdriver.Chrome()
)  # Change to appropriate driver (e.g., Firefox, Safari) if needed

# Open a CSV file in write mode
with open("output.csv", "w", newline="", encoding="utf-8") as csvfile:
    # Create a CSV writer object
    csvwriter = csv.writer(csvfile)

    # Write header row
    csvwriter.writerow(["URL", "Title"])

    # Iterate over each URL
    for sbSeq in sbSeq_values_encoded:
        # Encode the sbSeq value
        encoded_sbSeq = quote(sbSeq)

        # Construct the URL by replacing {} in the base URL template with the encoded sbSeq value
        url = base_url.format(encoded_sbSeq)

        # Open the URL using Selenium
        driver.get(url)

        # Wait for the view title to be visible
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, ".view-title"))
        )

        # Get the page source after JavaScript rendering
        page_source = driver.page_source

        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(page_source, "html.parser")

        # Find the div element with class "content-inner color-type_g"
        div_element = soup.find("div", class_="content-inner color-type_g")

        # Initialize variables to store URL and title
        url = None
        title = None

        # Check if the div element is found
        if div_element:
            # Find the <div> element with class "view-title-area" inside the main <div>
            view_title_div = div_element.find("div", class_="view-title-area")

            # Find the <p> element with class "view-title" inside the view title div
            view_title_p = view_title_div.find("p", class_="view-title")

            # Check if the view title paragraph is found
            if view_title_p:
                # Get the title text
                title = view_title_p.text.strip()

            # Set the URL
            url = driver.current_url

        # Write URL and title to CSV file
        csvwriter.writerow([url, title])

# Close the Selenium webdriver
driver.quit()
