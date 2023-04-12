# `actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule <a name="`actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplate <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplate" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrepositoryoidcsubjectclaimcustomizationtemplate"

actionsrepositoryoidcsubjectclaimcustomizationtemplate.NewActionsRepositoryOidcSubjectClaimCustomizationTemplate(scope Construct, id *string, config ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig) ActionsRepositoryOidcSubjectClaimCustomizationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys">ResetIncludeClaimKeys</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeClaimKeys` <a name="ResetIncludeClaimKeys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys"></a>

```go
func ResetIncludeClaimKeys()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrepositoryoidcsubjectclaimcustomizationtemplate"

actionsrepositoryoidcsubjectclaimcustomizationtemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrepositoryoidcsubjectclaimcustomizationtemplate"

actionsrepositoryoidcsubjectclaimcustomizationtemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrepositoryoidcsubjectclaimcustomizationtemplate"

actionsrepositoryoidcsubjectclaimcustomizationtemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput">IncludeClaimKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput">UseDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeClaimKeysInput`<sup>Optional</sup> <a name="IncludeClaimKeysInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput"></a>

```go
func IncludeClaimKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `UseDefaultInput`<sup>Optional</sup> <a name="UseDefaultInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput"></a>

```go
func UseDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeClaimKeys`<sup>Required</sup> <a name="IncludeClaimKeys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys"></a>

```go
func IncludeClaimKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault"></a>

```go
func UseDefault() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionsrepositoryoidcsubjectclaimcustomizationtemplate"

&actionsrepositoryoidcsubjectclaimcustomizationtemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	UseDefault: interface{},
	Id: *string,
	IncludeClaimKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository">Repository</a></code> | <code>*string</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>*[]*string</code> | A list of OpenID Connect claims. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The name of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_repository_oidc_subject_claim_customization_template#repository ActionsRepositoryOidcSubjectClaimCustomizationTemplate#repository}

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault"></a>

```go
UseDefault interface{}
```

- *Type:* interface{}

Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_repository_oidc_subject_claim_customization_template#use_default ActionsRepositoryOidcSubjectClaimCustomizationTemplate#use_default}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeClaimKeys`<sup>Optional</sup> <a name="IncludeClaimKeys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys"></a>

```go
IncludeClaimKeys *[]*string
```

- *Type:* *[]*string

A list of OpenID Connect claims.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_repository_oidc_subject_claim_customization_template#include_claim_keys ActionsRepositoryOidcSubjectClaimCustomizationTemplate#include_claim_keys}

---



