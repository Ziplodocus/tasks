defmodule TasksWeb.TaskHTML do
  @moduledoc """
  This module contains pages rendered by PageController.

  See the `page_html` directory for all templates available.
  """
  use TasksWeb, :html

  embed_templates "task_html/*"
end
