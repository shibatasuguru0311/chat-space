json.array! @users do |user|
  json.name  user.name
  json.email  user.email
  json.encrypted_password  user.encrypted_password
  json.id    user.id
end