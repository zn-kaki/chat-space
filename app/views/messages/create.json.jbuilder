json.group_id @message.group_id
json.content @message.content
json.created_at @message.created_at.strftime("%Y年%m月%d日")
json.image @message.image.url
json.id @message.id
