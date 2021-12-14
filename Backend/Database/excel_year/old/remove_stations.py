import pandas as pd

df = pd.read_excel("Datsaset_without_faecal_none.xlsx")
print(df.value_counts(['STATION CODE']))
df2 = df.groupby('STATION CODE').filter(lambda x: len(x) > 4)
print(df2.value_counts(['STATION CODE']))
df2.to_excel('station_code_greater_than_5.xlsx', index=False)