Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do
    resources :shares
  end
  devise_for :users,
    :controllers => {
        :omniauth_callbacks => "users/omniauth_callbacks"
    }
    
  devise_scope :user do
    get '/api/current_user' => 'users/sessions#show_current_user'
    post '/api/check/is_user' => 'users/users#is_user', as: 'is_user'
  end
  
  get '/dashboard' => 'welcome#dashboard'
  
  root to: 'welcome#index'
  
end
