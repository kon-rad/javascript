#!/bin/python3
#!/bin/python
# Python MaxHeap
# public functions: push, peek, pop
# private functions: __swap, __floatUp, __bubbleDown

class MaxHeap:
	def __init__(self, items=[]):
		super().__init__()
		self.heap = [0]
		for i in items:
			self.heap.append(i)
			self.__floatUp(len(self.heap) - 1)

	def push(self, data):
		self.heap.append(data)
		self.__floatUp(len(self.heap) - 1)

	def peek(self):
		if len(self.heap) > 1:
			return self.heap[1]
		else:
			return False
			
	def pop(self):
		if len(self.heap) > 2:
			self.__swap(1, len(self.heap) - 1)
			max = self.heap.pop()
			self.__bubbleDown(1)
		elif len(self.heap) == 2:
			max = self.heap.pop()
		else: 
			max = False
		return max

	def __swap(self, i, j):
		self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

	def __floatUp(self, index):
		parent = index//2
		if index <= 1:
			return
		elif self.heap[index] > self.heap[parent]:
			self.__swap(index, parent)
			self.__floatUp(parent)

	def __bubbleDown(self, index):
		left = index * 2
		right = index * 2 + 1
		largest = index
		if len(self.heap) > left and self.heap[largest] < self.heap[left]:
			largest = left
		if len(self.heap) > right and self.heap[largest] < self.heap[right]:
			largest = right
		if largest != index:
			self.__swap(index, largest)
			self.__bubbleDown(largest)
			
# Python MinHeap
# public functions: push, peek, pop
# private functions: __swap, __floatUp, __bubbleDown

class MinHeap:
	def __init__(self, items=[]):
		super().__init__()
		self.heap = [0]
		for i in items:
			self.heap.append(i)
			self.__floatUp(len(self.heap) - 1)

	def push(self, data):
		self.heap.append(data)
		self.__floatUp(len(self.heap) - 1)

	def peek(self):
		if self.heap[1]:
			return self.heap[1]
		else:
			return False
			
	def pop(self):
		if len(self.heap) > 2:
			self.__swap(1, len(self.heap) - 1)
			max = self.heap.pop()
			self.__bubbleDown(1)
		elif len(self.heap) == 2:
			max = self.heap.pop()
		else: 
			max = False
		return max

	def __swap(self, i, j):
		self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

	def __floatUp(self, index):
		parent = index//2
		if index <= 1:
			return
		elif self.heap[index] < self.heap[parent]:
			self.__swap(index, parent)
			self.__floatUp(parent)

	def __bubbleDown(self, index):
		left = index * 2
		right = index * 2 + 1
		smallest = index
		if len(self.heap) > left and self.heap[smallest] > self.heap[left]:
			smallest = left
		if len(self.heap) > right and self.heap[smallest] > self.heap[right]:
			smallest = right
		if smallest != index:
			self.__swap(index, smallest)
			self.__bubbleDown(smallest)
		
		
		
    
class RunningMedian:
	def __init__(self, items=[]):
		super().__init__()
		self.minHp = MinHeap()
		self.maxHp = MaxHeap()
		
	def addNewItem(self, newNum):
	  if len(self.maxHp.heap) == 1 and len(self.minHp.heap) == 1:
	    self.maxHp.push(newNum)
	  elif len(self.maxHp.heap) == len(self.minHp.heap):
	    if newNum <= self.maxHp.peek():
	      self.maxHp.push(newNum)
	    elif newNum >= self.maxHp.peek() and newNum < self.minHp.peek():
	      self.maxHp.push(newNum)
	    else:
	      self.maxHp.push(self.minHp.pop())
	      self.minHp.push(newNum)
	  else:
	    if newNum <= self.maxHp.peek():
	      self.minHp.push(self.maxHp.pop())
	      self.maxHp.push(newNum)
	    elif newNum >= self.maxHp.peek():
	      self.minHp.push(newNum)
	  
	def getMedian(self):
	  if len(self.maxHp.heap) == len(self.minHp.heap):
	    median = float(self.maxHp.peek() + self.minHp.peek())/2.0
	    return median
	  else:
	    return float(self.maxHp.peek())
import sys


rM = RunningMedian()


n = int(input().strip())
a_i = 0
for a_i in range(n):
   a_t = int(input().strip())
   rM.addNewItem(a_t)
   print(str(rM.getMedian()))
