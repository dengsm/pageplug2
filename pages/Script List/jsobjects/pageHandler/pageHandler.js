export default {
	 confadd: () => {
  // write code here
  conf_add.run()
    .then(() => {
      showAlert("添加成功", "success");
      conf_select.run();
    })
    .catch(() => {
      showAlert("添加失败", "error");
    });
 },
confupdate: () => {
  // write code here
  conf_update.run()
    .then(() => {
      showAlert("更新成功", "success");
      conf_select.run();
    })
    .catch(() => {
      showAlert("更新失败", "error");
    });
},
	confdelete: () => {
  conf_delete.run()
    .then(() => {
      showAlert("已删除", "success");
      conf_select.run();
    })
    .catch(() => {
      showAlert("删除失败", "error");
    });
		closeModal('Modal1');
}
}