# This is intended to be a reasurance of the math I have done
# This is only exploring page #7 

# to square a function ie raise to a 'n' power you need '**' operator ie 1^2 == 1**2


# single Var calc. This is intended for 1 dimendional graphs ie y = mx (+ or -) b
# equation
# f(x) =  -(x^2) + 3(x) + 2

# This function only does a single computaion -> O(1)
def singleVar_single_output(x):
  y = (x, (-x**2)+(3*x)+2)
  print(y)

# this function does 'n' amount of computation -> O(n)
def singleVar_n_ouput(n):
  for i in range(n):
    y = (i, ((-i**2)+(3*i)+2))
    print(y)

singleVar_single_output(1)
# singleVar_n_ouput(10)





# multi var calc. This for 3D graphs ie    -mx + y (+ or -) b = z  

# equation
# f(x,y) = ( ((x-2)^2) + ((y-2)^2) + 2 )

# this function only does a single computation -> O(1)
def multiVar_single_output(x,y):
  output = (x,y,( ((x-2)**2) + ((y-2)**2) + 2))
  print(output)
  
# This function has to run through each value of n -> n^2 -> O(n^2)
def multiVar_n_output(n):
  for x in range(n):
    for y in range(n):
      output = (x, y, (( ((x-2)**2) + ((y-2)**2) + 2)) )
      print(output)


# multiVar_single_output(0,0)
# multiVar_n_output(10)