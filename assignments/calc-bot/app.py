import re

operations = {
    'add': lambda a, b: a + b,
    'sum': lambda a, b: a + b,
    'plus': lambda a, b: a + b,
    '+': lambda a, b: a + b,
    'subtract': lambda a, b: b - a,
    'minus': lambda a, b: b - a,
    'reduce': lambda a, b: b - a,
    '-': lambda a, b: b - a,
    'multiply': lambda a, b: a * b,
    'mul': lambda a, b: a * b,
    'product': lambda a, b: a * b,
    '*': lambda a, b: a * b,
    'x': lambda a, b: a * b,
    'division': lambda a, b: a / b,
    'divide': lambda a, b: a / b,
    'quotient': lambda a, b: a / b,
    '/': lambda a, b: a / b,
    'clear': lambda a, b: None
}

calculation_stack = []

def perform_calculation(user_input):
    global calculation_stack

    words = re.findall(r'\w+', user_input.lower())

    for op_keyword in operations.keys():
        if op_keyword in words:
            op = operations[op_keyword]
            break
    else:
        print("Sorry, I didn't understand that operation.")
        return

    numbers = [float(word) for word in words if word.isdigit() or (len(word) > 1 and word[0] == '-' and word[1:].isdigit())]

    if op == operations['clear']:
        if not calculation_stack:
            print("The stack is already empty.")
        else:
            calculation_stack = []
            print("Cleared the stack.")
    elif 'all' in words:
        if not len(calculation_stack):
            print("The stack is empty. Cannot perform operation on all values.")
        else:
            result = calculation_stack[0]
            for value in calculation_stack[1:]:
                result = op(result, value)
            calculation_stack.append(result)
            print(f"Result: {result}")
            print(f"Stack: {calculation_stack}")
    elif len(numbers) == 0 and len(calculation_stack) >= 2:
        a, b = calculation_stack.pop(), calculation_stack.pop()
        result = op(b, a)
    elif len(numbers) == 1 and len(calculation_stack) >= 1:
        a = calculation_stack[-1]
        result = op(a, numbers[0])
    elif len(numbers) == 2:
        a, b = numbers
        result = op(a, b)
    else:
        print("Sorry, I didn't understand that input.")
        return

    if op != operations['clear'] and 'all' not in words:
        calculation_stack.append(result)
        print(f"Result: {result}")
        print(f"Stack: {calculation_stack}")

while True:
    user_input = input("Enter your calculation: ")
    if user_input.lower() == 'exit':
        break
    perform_calculation(user_input)
