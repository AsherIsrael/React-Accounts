Rails.application.routes.draw do
  resources :locations
  get '/dashboard' => 'dashboards#index'
  resources :users
  resources :records
  root 'users#new'
  post '/login' => 'users#login'
  get '/logout' => 'users#logout'
end
