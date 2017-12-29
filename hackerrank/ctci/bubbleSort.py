n = 7
a = [4,3,8,6,1,2,6]

swaps = 0
for x in range(n):
  currentSwaps = 0
  for z in range(0, n-1):
    if a[z] > a[z+1]:
      a[z], a[z + 1] = a[z + 1], a[z]
      swaps += 1
      currentSwaps += 1
  if currentSwaps = 0
    break

print("Array is sorted in %d swaps." % (swaps))
print("First Element: %d" % (a[0]))
print("Last Element: %d" % (a[n-1]))
  
  
