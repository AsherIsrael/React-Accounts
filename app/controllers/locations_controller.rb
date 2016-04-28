class LocationsController < ApplicationController
   before_action :require_login, except: [:google]
   def index
      @locations = Location.where(user:current_user)
      render json: @locations
   end
   def google
      render "/google6abbbb5ad4aea7d4.html" layout: false
   end
end
