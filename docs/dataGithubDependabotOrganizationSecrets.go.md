# `dataGithubDependabotOrganizationSecrets` Submodule <a name="`dataGithubDependabotOrganizationSecrets` Submodule" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubDependabotOrganizationSecrets <a name="DataGithubDependabotOrganizationSecrets" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/d/dependabot_organization_secrets github_dependabot_organization_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

datagithubdependabotorganizationsecrets.NewDataGithubDependabotOrganizationSecrets(scope Construct, id *string, config DataGithubDependabotOrganizationSecretsConfig) DataGithubDependabotOrganizationSecrets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig">DataGithubDependabotOrganizationSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig">DataGithubDependabotOrganizationSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

datagithubdependabotorganizationsecrets.DataGithubDependabotOrganizationSecrets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

datagithubdependabotorganizationsecrets.DataGithubDependabotOrganizationSecrets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

datagithubdependabotorganizationsecrets.DataGithubDependabotOrganizationSecrets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList">DataGithubDependabotOrganizationSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.secrets"></a>

```go
func Secrets() DataGithubDependabotOrganizationSecretsSecretsList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList">DataGithubDependabotOrganizationSecretsSecretsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubDependabotOrganizationSecretsConfig <a name="DataGithubDependabotOrganizationSecretsConfig" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

&datagithubdependabotorganizationsecrets.DataGithubDependabotOrganizationSecretsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/dependabot_organization_secrets#id DataGithubDependabotOrganizationSecrets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/dependabot_organization_secrets#id DataGithubDependabotOrganizationSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubDependabotOrganizationSecretsSecrets <a name="DataGithubDependabotOrganizationSecretsSecrets" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

&datagithubdependabotorganizationsecrets.DataGithubDependabotOrganizationSecretsSecrets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubDependabotOrganizationSecretsSecretsList <a name="DataGithubDependabotOrganizationSecretsSecretsList" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

datagithubdependabotorganizationsecrets.NewDataGithubDependabotOrganizationSecretsSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubDependabotOrganizationSecretsSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.get"></a>

```go
func Get(index *f64) DataGithubDependabotOrganizationSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubDependabotOrganizationSecretsSecretsOutputReference <a name="DataGithubDependabotOrganizationSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v7/datagithubdependabotorganizationsecrets"

datagithubdependabotorganizationsecrets.NewDataGithubDependabotOrganizationSecretsSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubDependabotOrganizationSecretsSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets">DataGithubDependabotOrganizationSecretsSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubDependabotOrganizationSecretsSecrets
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets">DataGithubDependabotOrganizationSecretsSecrets</a>

---



