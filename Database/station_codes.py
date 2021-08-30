import pandas as pd
import glob
# Code to concat all files
# filenames = glob.glob("water*.xlsx")
# needed = ['STATION CODE', 'LOCATION']
# bruh = [pd.read_excel(filename, index_col=None)[needed] for filename in filenames]
# station_df = pd.DataFrame(columns=needed)
# station_df = pd.concat(bruh, ignore_index=True)
# station_df.to_excel('station_codes3.xlsx')


# Code to remove duplicates
station_df = pd.read_excel('station_codes.xlsx')
station_df.drop_duplicates(subset='STATION CODE', inplace=True,ignore_index=True)
station_df.to_excel('station_codes3.xlsx')
