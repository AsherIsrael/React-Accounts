class User < ActiveRecord::Base
  has_secure_password
  has_many :records
  validates :username, presence: true, uniqueness: {case_sensitive: true}
  validates :name, presence: true
end
