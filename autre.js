// Ajouter une tâche importante et urgente
$("#important-urgent-add-task-btn").click(function() {
    var taskName = $("#important-urgent-new-task").val();
    if (taskName.trim() === "") {
      alert("Veuillez saisir une tâche.");
      return;
    }
    var taskId = "important-urgent-task-" + ($("#important-urgent-list li").length + 1);
    var taskDescId = taskId + "-desc";
    var taskHtml = '<li><input type="checkbox" id="' + taskId + '" aria-describedby="' + taskDescId + '"><label for="' + taskId + '">' + taskName + '</label><div id="' + taskDescId + '" class="task-description">Cette tâche est très importante et doit être terminée aujourd\'hui avant la réunion.</div></li>';
    $("#important-urgent-list").append(taskHtml);
    $("#important-urgent-new-task").val("");
  });
  
  // Ajouter une tâche importante mais non urgente
  $("#important-not-urgent-add-task-btn").click(function() {
    var taskName = $("#important-not-urgent-new-task").val();
    if (taskName.trim() === "") {
      alert("Veuillez saisir une tâche.");
      return;
    }
    var taskId = "important-not-urgent-task-" + ($("#important-not-urgent-list li").length + 1);
    var taskDescId = taskId + "-desc";
    var taskHtml = '<li><input type="checkbox" id="' + taskId + '" aria-describedby="' + taskDescId + '"><label for="' + taskId + '">' + taskName + '</label><div id="' + taskDescId + '" class="task-description">
  