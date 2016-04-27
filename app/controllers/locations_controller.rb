class LocationsController < ApplicationController
   before_action :require_login
   def index
      @locations = Location.where(user:current_user)
      render json: @locations
   end
end
