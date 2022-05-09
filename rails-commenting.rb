# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# defines class BlogPostsController that inherits from ApplicationController.
# def index will display inputs associated with it i.e BlogPost per line 19
class BlogPostsController < ApplicationController
  def index



    # ---2)
    # @posts is an instance variable that is set to equal Blogpost with the dot notation of 'all' which pulls all the inputs of Blogpost
    @posts = BlogPost.all
  end


  # ---3)
  # the controller method 'show' listens for an item. the intializer @post =blogpost.find params will pull all id inputs in numerical oder.
  #

  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The RESTful route new displays a form to the user and return an HTML for creating a new BlogPost.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The Restful route create will create a new blog post. if valid? will run all specified valdiations. If true it will redirct to the alias blog_post_path @post if false it will redircect the user to the new blog post route alias
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end


  def edit
    # ---6)
    # The RESTful route edit will return an html form for editing the blog post.
    # the .find(params[:id]) will find speicifc ids to edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Update will update a a blogpost if valid. If false it will redirect to the alias edit blog post path. Destroy will delete the specificed blogpost id and then redirct to the alias blog_post_path
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # redirect to will open up the alias blog_post_path @path
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # private keeps information out of public viewing. Code below private will only be visible to those with file access. 
  private
  def blog_post_params
    # ---10)
    # the required entries for the table blog_post will have to include a title column and content column
    params.require(:blog_post).permit(:title, :content)
  end
end
