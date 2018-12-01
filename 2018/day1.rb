input = File.open('day1input')

val = input.map { |e| Integer(e.gsub("\n", "")) }
ans1 = val.inject(0, :+)
puts ans1

start = 0
vals = []
ans2 = val.cycle do |e|
  start += e
  # puts start
  # puts vals.length
  if vals.include?(start)
    puts start
    break
  end
  vals.push(start)
end
