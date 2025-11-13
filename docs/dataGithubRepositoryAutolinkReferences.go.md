# `dataGithubRepositoryAutolinkReferences` Submodule <a name="`dataGithubRepositoryAutolinkReferences` Submodule" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryAutolinkReferences <a name="DataGithubRepositoryAutolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_autolink_references github_repository_autolink_references}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

datagithubrepositoryautolinkreferences.NewDataGithubRepositoryAutolinkReferences(scope Construct, id *string, config DataGithubRepositoryAutolinkReferencesConfig) DataGithubRepositoryAutolinkReferences
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig">DataGithubRepositoryAutolinkReferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig">DataGithubRepositoryAutolinkReferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryAutolinkReferences resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

datagithubrepositoryautolinkreferences.DataGithubRepositoryAutolinkReferences_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

datagithubrepositoryautolinkreferences.DataGithubRepositoryAutolinkReferences_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

datagithubrepositoryautolinkreferences.DataGithubRepositoryAutolinkReferences_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

datagithubrepositoryautolinkreferences.DataGithubRepositoryAutolinkReferences_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubRepositoryAutolinkReferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubRepositoryAutolinkReferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubRepositoryAutolinkReferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_autolink_references#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryAutolinkReferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.autolinkReferences">AutolinkReferences</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList">DataGithubRepositoryAutolinkReferencesAutolinkReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutolinkReferences`<sup>Required</sup> <a name="AutolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.autolinkReferences"></a>

```go
func AutolinkReferences() DataGithubRepositoryAutolinkReferencesAutolinkReferencesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList">DataGithubRepositoryAutolinkReferencesAutolinkReferencesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryAutolinkReferencesAutolinkReferences <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

&datagithubrepositoryautolinkreferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences {

}
```


### DataGithubRepositoryAutolinkReferencesConfig <a name="DataGithubRepositoryAutolinkReferencesConfig" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

&datagithubrepositoryautolinkreferences.DataGithubRepositoryAutolinkReferencesConfig {
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
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryAutolinkReferencesAutolinkReferencesList <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferencesList" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

datagithubrepositoryautolinkreferences.NewDataGithubRepositoryAutolinkReferencesAutolinkReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubRepositoryAutolinkReferencesAutolinkReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get"></a>

```go
func Get(index *f64) DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/datagithubrepositoryautolinkreferences"

datagithubrepositoryautolinkreferences.NewDataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.isAlphanumeric">IsAlphanumeric</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.targetUrlTemplate">TargetUrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences">DataGithubRepositoryAutolinkReferencesAutolinkReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsAlphanumeric`<sup>Required</sup> <a name="IsAlphanumeric" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.isAlphanumeric"></a>

```go
func IsAlphanumeric() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `TargetUrlTemplate`<sup>Required</sup> <a name="TargetUrlTemplate" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.targetUrlTemplate"></a>

```go
func TargetUrlTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubRepositoryAutolinkReferencesAutolinkReferences
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences">DataGithubRepositoryAutolinkReferencesAutolinkReferences</a>

---



