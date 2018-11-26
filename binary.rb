def binary_converter(decimal)

  i=2
  
  answer = []
  
  until decimal == 0
  
  if decimal - 2**i > 0 
    answer << 1
    decimal = decimal - 2**i
  
  elsif decimal - 2**i < 0 
    answer << 0
  end
  i -= 1
  print i
  end
  answer
  end

  print binary_converter(7)