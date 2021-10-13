<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/TH_base2/templates/block/block.html.twig */
class __TwigTemplate_29d13b8ea695d44ef1256f7b7817c2961efd347fed63c5eb69926f74503e6465 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@block/block.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 29
        $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => [0 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 30
($context["configuration"] ?? null), "provider", [], "any", false, false, true, 30), 30, $this->source))), 1 => twig_get_attribute($this->env, $this->source,         // line 31
($context["attributes"] ?? null), "id", [], "any", false, false, true, 31)]], "method", false, false, true, 29);
        // line 1
        $this->parent = $this->loadTemplate("@block/block.html.twig", "themes/TH_base2/templates/block/block.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "themes/TH_base2/templates/block/block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  47 => 1,  45 => 31,  44 => 30,  43 => 29,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/TH_base2/templates/block/block.html.twig", "/Users/trentonmarks/Sites/devdesktop/tht-react/themes/TH_base2/templates/block/block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 29);
        static $filters = array("clean_class" => 30);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['clean_class'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
