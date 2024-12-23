export Server_Dir=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
Temp_Dir="$Server_Dir/tmp"
Conf_Dir="$Server_Dir/tconf"
## Clash 配置文件重新格式化及配置
# 取出代理相关配置 
#sed -n '/^proxies:/,$p' $Temp_Dir/clash.yaml > $Temp_Dir/proxy.txt
sed -n '/^proxies:/,$p' $Temp_Dir/clash_config.yaml > $Temp_Dir/proxy.txt

# 合并形成新的config.yaml
cat $Temp_Dir/templete_config.yaml > $Temp_Dir/config.yaml
cat $Temp_Dir/proxy.txt >> $Temp_Dir/config.yaml
\cp $Temp_Dir/config.yaml $Conf_Dir/

Dashboard_Dir="/dashboard/public"
sed -ri "s@^# external-ui:.*@external-ui: ${Dashboard_Dir}@g" $Conf_Dir/config.yaml
sed -r -i '/^secret: /s@(secret: ).*@\1clash@g' $Conf_Dir/config.yaml