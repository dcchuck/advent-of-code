input = File.open('day2input')

val = input.map { |e| e.gsub("\n", "") }

def remove_char str, x
  "#{str.slice(0,x-1)}#{str.slice(x,str.length-1)}"
end

for i in 1..val[0].length
  v = val.map { |e| remove_char e, i }
  if !(v == v.uniq)
    puts v.detect{ |e| v.count(e) > 1 }
  end
end

