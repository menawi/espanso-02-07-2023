# Strings.py

class Person:
    species = "Homo Sapiens"  # class variable

    def __init__(self, name):
        self.name = name  # instance variable


p1 = Person("Alice")
p2 = Person("Bob")

print(p1.name)  # Alice
print(p1.species)  # Homo Sapiens
print(p2.name)  # Bob
print(p2.species)  # Homo Sap
