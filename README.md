# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
-belongs_to :group
-belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unque: true|
|mail|string|null: false|
|password|string||
|group_id|integer||

### Association
- has_many :group, through: members
- has_many :messages
- has_many :members

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string||
|user_id|integer||

### Association
-has_many :messages
-has_many :through: :user_group
-belongs_to :users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body||text||
|image|text||
|user_id|integer||
|group_id|integer||

### Association
-belongs_to :user
-belongs_to :group



