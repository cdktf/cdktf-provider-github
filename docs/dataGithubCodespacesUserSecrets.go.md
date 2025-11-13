# `dataGithubCodespacesUserSecrets` Submodule <a name="`dataGithubCodespacesUserSecrets` Submodule" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCodespacesUserSecrets <a name="DataGithubCodespacesUserSecrets" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/codespaces_user_secrets github_codespaces_user_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

datagithubcodespacesusersecrets.NewDataGithubCodespacesUserSecrets(scope Construct, id *string, config DataGithubCodespacesUserSecretsConfig) DataGithubCodespacesUserSecrets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig">DataGithubCodespacesUserSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig">DataGithubCodespacesUserSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubCodespacesUserSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

datagithubcodespacesusersecrets.DataGithubCodespacesUserSecrets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

datagithubcodespacesusersecrets.DataGithubCodespacesUserSecrets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

datagithubcodespacesusersecrets.DataGithubCodespacesUserSecrets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

datagithubcodespacesusersecrets.DataGithubCodespacesUserSecrets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubCodespacesUserSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubCodespacesUserSecrets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubCodespacesUserSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/codespaces_user_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubCodespacesUserSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList">DataGithubCodespacesUserSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.secrets"></a>

```go
func Secrets() DataGithubCodespacesUserSecretsSecretsList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList">DataGithubCodespacesUserSecretsSecretsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCodespacesUserSecretsConfig <a name="DataGithubCodespacesUserSecretsConfig" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

&datagithubcodespacesusersecrets.DataGithubCodespacesUserSecretsConfig {
	Connection: interface{},
	Count: interface{},
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
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/codespaces_user_secrets#id DataGithubCodespacesUserSecrets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/codespaces_user_secrets#id DataGithubCodespacesUserSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubCodespacesUserSecretsSecrets <a name="DataGithubCodespacesUserSecretsSecrets" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

&datagithubcodespacesusersecrets.DataGithubCodespacesUserSecretsSecrets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubCodespacesUserSecretsSecretsList <a name="DataGithubCodespacesUserSecretsSecretsList" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

datagithubcodespacesusersecrets.NewDataGithubCodespacesUserSecretsSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubCodespacesUserSecretsSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.get"></a>

```go
func Get(index *f64) DataGithubCodespacesUserSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubCodespacesUserSecretsSecretsOutputReference <a name="DataGithubCodespacesUserSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubcodespacesusersecrets"

datagithubcodespacesusersecrets.NewDataGithubCodespacesUserSecretsSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubCodespacesUserSecretsSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets">DataGithubCodespacesUserSecretsSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubCodespacesUserSecretsSecrets
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets">DataGithubCodespacesUserSecretsSecrets</a>

---



