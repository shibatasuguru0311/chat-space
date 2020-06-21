# chat-space  DB設計
## usersテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| username | string | null: false , index: true , unique: true |
| email | string | null: false |
| password | string | null: false |
### Association
- has_many :messages
- has_many :groups, through: users_groups

## messagesテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| user_id | integer | null: false |
| group_id | integer | null: false |
| body | text | null: false |
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| group_name | string | null: false |
### Association
- has_many :messages
- has_many :users, through: users_groups

## users_groupsテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| user_id | integer | null: false |
| group_id | integer | null: false |
### Association
- belongs_to :user
- belongs_to :group
