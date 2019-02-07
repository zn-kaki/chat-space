json.array! @new_message do |messsage|
  json.content @message.content
  json.created_at @messsage.created_at.strftime("%Y/%m/%d %H:%M")
  json.id @message.id
  json.imaget @message.imaget.url
end
