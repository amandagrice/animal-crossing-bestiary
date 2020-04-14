import csv
import json


def get_months(months):
	if (months.strip() == "All"):
		months = list(range(1, 13))
	else:
		months = months.split(';')
		for i in range(len(months)):
			months[i] = int(months[i])
	return months

def get_times(times):
	if (times.strip() == "All"):
		times = list(range(1, 25))
	else:
		times = times.split(';')
		for i in range(len(times)):
			times[i] = int(times[i])
	return times

bugs = []
with open('bugs.csv', newline='\n') as bug_csvfile:
	bugreader = csv.reader(bug_csvfile, delimiter=',', quotechar='|')
	for row in bugreader:
		bugs.append(
			{
				"id": int(row[0]),
				"name": row[1],
				"location": row[2],
				"value": int(row[3]),
				"monthsString": row[4],
				"months": get_months(row[5]),
				"times": row[6].split('/')

			})
print(json.dumps(bugs, indent=4))

with open('bugs.json', 'w') as bug_outfile:
    json.dump(bugs, bug_outfile, indent=4)


fish = []
with open('fish.csv', newline='\n') as fish_csvfile:
	fishreader = csv.reader(fish_csvfile, delimiter=',', quotechar='|')
	for row in fishreader:
		fish.append(
			{
				"id": int(row[0]),
				"name": row[1],
				"location": row[2],
				"value": int(row[3]),
				"monthsString": row[4],
				"months": get_months(row[5]),
				"timeString": row[6],
				"times": get_times(row[7]),
				"shadow": row[8]

			})
print(json.dumps(fish, indent=4))

with open('fish.json', 'w') as fish_outfile:
    json.dump(fish, fish_outfile, indent=4)