# `dataGithubRepositoryCustomProperties` Submodule <a name="`dataGithubRepositoryCustomProperties` Submodule" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryCustomProperties <a name="DataGithubRepositoryCustomProperties" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_custom_properties github_repository_custom_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

datagithubrepositorycustomproperties.NewDataGithubRepositoryCustomProperties(scope Construct, id *string, config DataGithubRepositoryCustomPropertiesConfig) DataGithubRepositoryCustomProperties
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig">DataGithubRepositoryCustomPropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig">DataGithubRepositoryCustomPropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryCustomProperties resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

datagithubrepositorycustomproperties.DataGithubRepositoryCustomProperties_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

datagithubrepositorycustomproperties.DataGithubRepositoryCustomProperties_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

datagithubrepositorycustomproperties.DataGithubRepositoryCustomProperties_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

datagithubrepositorycustomproperties.DataGithubRepositoryCustomProperties_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubRepositoryCustomProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubRepositoryCustomProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubRepositoryCustomProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_custom_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryCustomProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.property">Property</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList">DataGithubRepositoryCustomPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.property"></a>

```go
func Property() DataGithubRepositoryCustomPropertiesPropertyList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList">DataGithubRepositoryCustomPropertiesPropertyList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomProperties.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryCustomPropertiesConfig <a name="DataGithubRepositoryCustomPropertiesConfig" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

&datagithubrepositorycustomproperties.DataGithubRepositoryCustomPropertiesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.repository">Repository</a></code> | <code>*string</code> | Name of the repository which the custom properties should be on. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_custom_properties#id DataGithubRepositoryCustomProperties#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Name of the repository which the custom properties should be on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_custom_properties#repository DataGithubRepositoryCustomProperties#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_custom_properties#id DataGithubRepositoryCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryCustomPropertiesProperty <a name="DataGithubRepositoryCustomPropertiesProperty" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

&datagithubrepositorycustomproperties.DataGithubRepositoryCustomPropertiesProperty {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryCustomPropertiesPropertyList <a name="DataGithubRepositoryCustomPropertiesPropertyList" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

datagithubrepositorycustomproperties.NewDataGithubRepositoryCustomPropertiesPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubRepositoryCustomPropertiesPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.get"></a>

```go
func Get(index *f64) DataGithubRepositoryCustomPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubRepositoryCustomPropertiesPropertyOutputReference <a name="DataGithubRepositoryCustomPropertiesPropertyOutputReference" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v14/datagithubrepositorycustomproperties"

datagithubrepositorycustomproperties.NewDataGithubRepositoryCustomPropertiesPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubRepositoryCustomPropertiesPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.propertyName">PropertyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.propertyValue">PropertyValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesProperty">DataGithubRepositoryCustomPropertiesProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.propertyName"></a>

```go
func PropertyName() *string
```

- *Type:* *string

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.propertyValue"></a>

```go
func PropertyValue() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubRepositoryCustomPropertiesProperty
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryCustomProperties.DataGithubRepositoryCustomPropertiesProperty">DataGithubRepositoryCustomPropertiesProperty</a>

---



