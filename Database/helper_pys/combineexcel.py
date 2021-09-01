import pandas as pd

workbook_url = 'Water_quality_rivers_2018.xlsx'
excel_file = pd.read_excel(workbook_url, engine='openpyxl', sheet_name=None)
df = pd.concat(excel_file.values())
df.to_excel("output.xlsx")