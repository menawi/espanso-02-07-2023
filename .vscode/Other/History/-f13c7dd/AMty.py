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
