class TrieNode:
  def __init__(self):
    self.val = None
    self.size = 0
    self.pointers={}

class Trie:

  def __init__(self):
    self.root = TrieNode()
    
  def insert(self, word):
    self.rec_insert(word, self.root)
    return
  
  def rec_insert(self, word, node):
    if word[:1] not in node.pointers:
      newNode=TrieNode()
      newNode.val=word[:1]
      newNode.size = 0
      node.pointers[word[:1]]=newNode
      self.rec_insert(word, node)
    else:
      nextNode = node.pointers[word[:1]]
      nextNode.size += 1
      if len(word[1:])==0:
        nextNode.pointers[' ']='__END__'
        return
      return self.rec_insert(word[1:], nextNode)
      
  def search(self, word):
    if len(word)==0:
      return False
    return self.rec_search(word,self.root)
  
  def rec_search(self, word, node):
    if word[:1] not in node.pointers:
      return False
    else:
      nextNode = node.pointers[word[:1]]
      if len(word[1:])==0:
        if ' ' in nextNode.pointers:
          return True
        else:
          return False
      return self.rec_search(word[1:],nextNode)
    
  def startsWith(self, prefix):
    if len(prefix)==0:
      return 0
    return self.rec_search_prefix(prefix, self.root)
  
  def rec_search_prefix(self, word, node):
    if word[:1] not in node.pointers:
      return 0
    else:
      if len(word[1:])==0:
        nextNode = node.pointers[word[:1]]
        return nextNode.size
      nextNode = node.pointers[word[:1]]
    return self.rec_search_prefix(word[1:],nextNode)

inputs = [
'add hac',
'add hackerrank',
'add hadkerrank',
'add hakruba',
'add hacsootws',
'add hackkksaw',
'find hac',
'find hak']
trie = Trie()

for a0 in range(len(inputs)):
  op, contact = inputs[a0].strip().split(' ')
  if (op == 'add'):
    trie.insert(contact)
  elif (op == 'find'):
    print('final answer:', trie.startsWith(contact))