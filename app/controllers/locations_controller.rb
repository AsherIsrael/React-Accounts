class LocationsController < ApplicationController
   before_action :require_login, except: [:google]
   def index
      @locations = Location.where(user:current_user)
      render json: @locations
   end
   def google
      render "google6abbbb5ad4aea7d4.html", layout: false
   end
<<<<<<< HEAD
=======
   def create
      @location = Location.new(location_params)
      if @location.save
         puts "saved"
         @location.update(user: current_user)
         render json: @location
      else
         puts "error"
         render json: @location.errors, status: :unprocessable_entity
      end
   end
   def destroy

   end

   private

      def location_params
         params.permit(:xCoord, :yCoord, :name, :designation)
      end
>>>>>>> locationApp
end
