Rails.application.routes.draw do
  devise_for
  root 'messages#index'
  resources :users, only: [:edit, :update]
    resources :groups, only: [:index,  :create, :edit, :update] do
      resources :messages, only: [:index, :create]
end
end
