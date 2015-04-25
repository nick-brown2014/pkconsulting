Rails.application.routes.draw do
  root "landings#index"

  resources :about, only:[:index]
  resources :do_for_you, only:[:index]
  resources :contact, only:[:index]
  resources :experience, only:[:index]
end
