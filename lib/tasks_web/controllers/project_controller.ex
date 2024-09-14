defmodule TasksWeb.ProjectController do
  use TasksWeb, :controller

  def index(conn, params) do
    render(conn, "index.html", %{
      params: params,
      type: params["id"],
      method: :get
    })
  end

  def new(conn, params) do
    render(conn, "new.html", %{
      params: params
    })
  end

  def create(conn, params) do
    render(conn, "index.html", %{
      params: params
    })
  end

  # def get(conn, params) do
  #   IO.puts(conn.path_info)
  #   IO.puts(conn.request_path)
  #   IO.puts(conn.script_name)

  #   render(conn, conn["path"] <> ".html", %{
  #     params: params,
  #     type: params["id"]
  #   })
  # end

  # def post(conn, params) do
  #   render(conn, params["action"] <> ".html", %{
  #     params: params,
  #     type: params["id"]
  #   })
  # end

  # def view(conn, params) do
  #   render(conn, "view.html", %{
  #     params: params
  #   })
  # end
end
