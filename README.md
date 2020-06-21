# chat-space  DB設計
## usersテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| name | string | null: false , index: true , unique: true |
| email | string | null: false |
| password | string | null: false |
### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups

## messagesテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| user | references | null: false , foreign_key: true |
| group | references | null: false , foreign_key: true |
| body | text | |
| image | text | |
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| name | string | null: false |
### Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups

## users_groupsテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
| user | references | null: false , foreign_key: true |
| group | references | null: false , foreign_key: true |
### Association
- belongs_to :user
- belongs_to :group
