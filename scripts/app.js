angular.module('Example1App', []);
angular.module('Example1App').controller('MainController', function($scope){
    $scope.submit = function(){
        if($scope.userEmail && $scope.userName && $scope.userPassword && $scope.userConfirmPassword){
            if($scope.userPassword == $scope.userConfirmPassword){
                alert('Đăng Ký Thành Công!');
				
            } else {
                alert('Nhập Lại Mật Khẩu Chưa Đúng!');
            }
        } else 
		{
            alert('Bạn Cần Điền Đầy Đủ Thông Tin!');
			
        }
    };
	
});