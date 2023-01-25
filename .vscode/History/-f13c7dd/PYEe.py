# Strings.py

class famMember:
    def __init__(self, name, age):
        self.name = name
        self.age = age


mother = famMember('Bunny', 23)
daugther = famMember('Bonna', 0.25)
father = famMember('Bubby', 29)

# test
# print(type(mother.age))

# 📌 Template Literal equivelant

weather_north = -30
weather_south = 30

message = 'Today the weather is at ' + str(weather_north) + ' be careful.'

# print(message)

# 📌 'Arguments by position'

message_two = 'The weather in the north is {north} and the weather in the south is {south}'.format(
    north=weather_north, south=weather_south)

print(message_two)

# F-Strings(only available in 3.6++)

print(
    f'The weather in the south is {weather_south} and in the north is {weather_north} make sure to dress bipolar')
