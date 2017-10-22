""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""
import sys

def checkBST(root):
    return check(root, sys.maxint, -sys.maxint -1)
    
def check(root, maxNum, minNum):
    if not hasattr(root, 'left') or not hasattr(root, 'right'):
        return True
    rl = root.left
    rr = root.right
    if not hasattr(rl, 'data') or not hasattr(rr, 'data'):
        return True
    if rl.data < root.data and root.data < rr.data and rr.data < maxNum and rl.data > minNum:
        return check(root.left, root.data, minNum) and check(root.right, maxNum, root.data)
    else:
        return False
    
  
