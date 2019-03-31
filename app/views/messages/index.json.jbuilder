json.array! @new_messages.each do |messsage|
  json.user_name message.user.name
  json.content message.content
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
  json.image message.image.url
  json.id message.id
end
