input = File.open('day2input')

def count_obj str
  str.split('').each_with_object({}) do |e,o|
    if o[e]
      o[e] += 1
    else
      o[e] = 1
    end
  end
end

val = input.map { |e| count_obj e.gsub("\n", "") }

def checksum els
  c = els.each_with_object({ twos: 0, threes: 0 }) do |e,o|
    if e.value?(2)
      o[:twos] += 1
    end
    if e.value?(3)
      o[:threes] += 1
    end
  end
  c[:twos] * c[:threes]
end

puts checksum val
