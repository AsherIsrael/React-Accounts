Rails.application.routes.draw do
  resources :locations
  get '/dashboard' => 'dashboards#index'
  resources :users
  resources :records
  root 'users#new'
  post '/login' => 'users#login'
  get '/logout' => 'users#logout'
  get '/google6abbbb5ad4aea7d4.html' => 'locations#google'
end
