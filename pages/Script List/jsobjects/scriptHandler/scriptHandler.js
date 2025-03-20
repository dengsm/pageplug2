export default {
	 scriptadd: () => {
  // write code here
  script_add.run()
    .then(() => {
      showAlert("添加成功", "success");
      script_select.run();
    })
    .catch(() => {
      showAlert("添加失败", "error");
    });
 },
scriptupdate: () => {
  // write code here
  script_update.run()
    .then(() => {
      showAlert("更新成功", "success");
      script_select.run();
    })
    .catch(() => {
      showAlert("更新失败", "error");
    });
},
	scriptdelete: () => {
  script_delete.run()
    .then(() => {
      showAlert("已删除", "success");
      script_select.run();
    })
    .catch(() => {
      showAlert("删除失败", "error");
    });
		closeModal('Modal2');
}
}