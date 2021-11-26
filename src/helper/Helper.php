<?php

declare(strict_types=1);

date_default_timezone_set('Asia/Shanghai');
define('BASE_PATH', dirname(__DIR__, 1));

Views::quick("", 2, "");
//Views::vue("", 2, "");
//Views::scss("", 2, "");
//Views::bll("", 2, "");

/**
 * 页面与组件生成
 */
class Views
{
    /**
     * 快速生成页面与组件
     *
     * @param string $name 名称
     * @param integer $type 类型:1=页面,2=组件
     * @param string $append 路径后缀
     * @return void
     */
    public static function quick(string $name, int $type = 1, string $append = "/")
    {
        if ($name == "") {
            exit("文件名称不能为空~");
        }
        switch ($type) {
            case 1:
                $typeName = "/views";
                break;
            case 2:
                $typeName = "/components";
                break;
            default:
                $typeName = "/views";
                break;
        }
        self::vue($name, $typeName, $append);
        self::scss($name, $typeName, $append);
        self::bll($name, $typeName, $append);
    }

    /**
     * 添加vue文件
     *
     * @param string $name
     * @param string $typeName
     * @param string $append
     * @return void
     */
    private static function vue(string $name, string $typeName = "/views", string $append = "/")
    {

        if ($name == "") {
            exit("文件名称不能为空~");
        }
        $Fullmc = "{$name}.vue";
        Write::formatFrist($append);
        Write::formatLast($append);
        $dir =  BASE_PATH .   "{$typeName}{$append}";
        $content =
            #region
            <<<EOL
<template>
<div>
    {$name}
</div>
</template>

<script lang="ts">
import {$name} from "@/bll{$typeName}{$append}{$name}"
export default {$name}
</script>

<style lang="scss" scoped>
@import "@/style{$typeName}{$append}{$name}.scss";
</style>
EOL;
        #endregion
        Write::put($dir, $Fullmc, $content);
    }

    /**
     * 添加scss文件
     *
     * @param string $name
     * @param string $typeName
     * @param string $append
     * @return void
     */
    private static function scss(string $name, string $typeName = "/views", string $append = "/")
    {
        if ($name == "") {
            exit("文件名称不能为空~");
        }
        $Fullmc = "{$name}.scss";
        Write::formatFrist($append);
        Write::formatLast($append);
        $dir = BASE_PATH . "/style{$typeName}{$append}";
        $content = "";
        Write::put($dir, $Fullmc, $content);
    }

    /**
     * 添加bll层
     *
     * @param string $name
     * @param string $typeName
     * @param string $append
     * @return void
     */
    private static function bll(string $name, string $typeName = "/views", string $append = "/")
    {

        if ($name == "") {
            exit("文件名称不能为空~");
        }
        $Fullmc = "{$name}.ts";
        Write::formatFrist($append);
        Write::formatLast($append);
        $dir = BASE_PATH .   "/bll{$typeName}{$append}";
        $content =
            #region
            <<<EOL
import { defineComponent, getCurrentInstance } from "vue"
const {$name} = defineComponent({
    name: "{$name}",
    setup() {
        const proxy: any = getCurrentInstance()
        return {
            proxy,
        }
    },
    created() { },
    methods: {},
    components: {
    },
})

export default {$name}
EOL;
        #endregion
        Write::put($dir, $Fullmc, $content);
    }
}

/**
 * 文件写入
 */
class Write
{
    /**
     * 文件写入
     *
     * @param string $dir 目录
     * @param string $Fullmc 文件名称
     * @param string $content 内容
     * @return void
     */
    public static function put(string $dir, string $Fullmc, string $content)
    {

        self::formatLast($dir, false);
        if (!is_dir($dir)) {
            mkdir($dir, 755, true);
        }
        $filename = $dir . "/" . $Fullmc;
        self::formatPath($filename);
        if (!file_exists($filename)) {
            touch($filename, 755);
        }
        file_put_contents($filename, $content);
    }

    /**
     * 格式化路径
     *
     * @param string $path
     * @return void
     */
    public static function formatPath(string &$path)
    {
        if (PHP_OS == "WINNT") {
            $path = strtr($path, "/", "\\");
        } else {
            $path = strtr($path, "\\", "/");
        }
    }

    /**
     * 格式化路径
     *
     * @param string $str
     * @param boolean $append
     * @return void
     */
    public static function formatFrist(string &$str, bool $append = true)
    {
        $frist = substr($str, 0, 1);
        if ($append) {
            if ($frist != "/") {
                $str = "/" . $str;
            }
        } else {
            if ($frist == "/") {
                $str =  substr($str, 1, -1);
            }
        }
    }

    /**
     * 格式化路径
     *
     * @param string $str
     * @param boolean $append
     * @return void
     */
    public static function formatLast(string &$str, bool $append = true)
    {
        $last = substr($str, -1, 1);
        if ($append) {
            if ($last != "/") {
                $str .= "/";
            }
        } else {
            if ($last == "/") {
                $str =  substr($str, 0, strlen($str) - 1);
            }
        }
    }
}
