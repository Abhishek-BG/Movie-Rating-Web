
import sys
func = ["+", "-", "x", "/", "*"]
a = input("Enter the function you want to perform(+, -, * or x, /):\n").lower()
li = list(map(str,input("Enter 1st and 2nd  number: ").split(" ")))
if a in func:
    if a =="x":
        a ="*"
    for i in range(len(li)):
         if li[i].isnumeric()==False:
            sys.exit(f"ERROR: {li[i]} is an invalid_number")
         else:
            li[i] = int(li[i])
    print(f"Performing function : {a}")
    
    print(f"{li[0]}{a}{li[1]}=",eval(f"{li[0]}{a}{li[1]}"))
else:
    sys.exit(f"ERROR: {a} is an invalid_function")