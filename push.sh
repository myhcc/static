RED_COLOR='\E[1;31m'

cd /java/static
echo -e "\033[31m =====================pull===================== \033[0m"
git pull
echo -e "\033[31m =====================pull over===================== \033[0m"
sleep 3s
echo -e "\033[31m =====================add===================== \033[0m"
git add -A
echo -e "\033[31m =====================add over===================== \033[0m"
sleep 3s
echo -e "\033[31m =====================commit=====================\033[0m"
git commit -m "centos commit"
echo -e "\033[31m =====================commit over===================== \033[0m"
sleep 3s
echo -e "\033[31m =====================push===================== \033[0m"
git push
echo -e "\033[5;31m=====================push over===================== \033[0m"