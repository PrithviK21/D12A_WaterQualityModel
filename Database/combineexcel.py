import pandas as pd

workbook_url = 'Water_Quality_Rivers_2017.xlsx'
excel_file = pd.read_excel(workbook_url, sheet_name=None)
df = pd.concat(excel_file.values())
df.to_excel("output.xlsx")
print(df)